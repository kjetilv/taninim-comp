(ns taninim.api
  (:require [ajax.core :as ajax]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(defn- parse-jsonl [text]
  (->> (str/split text #"\n")
       (remove str/blank?)
       (mapv #(js->clj (.parse js/JSON %) :keywordize-keys true))))

(def ^:private yellin-base "https://iaasxfw4me2vteua3jzmorfj7e0nchgf.lambda-url.eu-north-1.on.aws")
(def ^:private kudu-base "https://irltdgn6vqkgol6rgrd4hprfp40yutvw.lambda-url.eu-north-1.on.aws")

(rf/reg-event-fx
  :api/authenticate
  (fn [{:keys [db]} [_ ext-auth-response]]
    {:http-xhrio {:method          :post
                  :uri             (str yellin-base "/auth")
                  :params          ext-auth-response
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:auth/success]
                  :on-failure      [:auth/failure]}}))

(rf/reg-event-fx
  :api/fetch-library
  (fn [{:keys [db]} _]
    (let [token (get-in db [:auth :token])]
      {:http-xhrio {:method          :get
                    :uri             (str kudu-base "/library.jsonl")
                    :params          {:t token}
                    :response-format (ajax/text-response-format)
                    :on-success      [:api/library-fetched]
                    :on-failure      [:library/fetch-failed]}})))

(rf/reg-event-fx
  :api/library-fetched
  (fn [_ [_ response]]
    {:fx [[:dispatch [:library/loaded (parse-jsonl response)]]]}))

(rf/reg-event-fx
  :api/acquire-lease
  (fn [{:keys [db]} [_ album-id]]
    (let [{:keys [fb-user-id token]} (:auth db)]
      {:http-xhrio {:method          :post
                    :uri             (str yellin-base "/lease")
                    :params          {:userId fb-user-id :token token :album album-id}
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:lease/acquired album-id]
                    :on-failure      [:lease/acquire-failed album-id]}})))

(rf/reg-event-fx
  :api/release-lease
  (fn [{:keys [db]} [_ album-id]]
    (let [{:keys [fb-user-id token]} (:auth db)]
      {:http-xhrio {:method          :delete
                    :uri             (str yellin-base "/lease")
                    :params          {:userId fb-user-id :token token :album album-id}
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:lease/released album-id]
                    :on-failure      [:lease/release-failed album-id]}})))

(defn audio-url [track-uuid format token]
  (str kudu-base "/audio/" track-uuid "." (if format (name format) "flac") "?t=" token))
