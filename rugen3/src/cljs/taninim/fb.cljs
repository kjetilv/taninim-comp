(ns taninim.fb
  (:require [re-frame.core :as rf]))

(def ^:private app-id "398404340829160")

(defonce ^:private initialized? (atom false))

(defn- auth-response->map [^js auth-response]
  {:userID                       (.-userID auth-response)
   :accessToken                  (.-accessToken auth-response)
   :signedRequest                (.-signedRequest auth-response)
   :expiresIn                    (.-expiresIn auth-response)
   :data_access_expiration_time  (.-data_access_expiration_time auth-response)})

(defn- handle-login-response [^js response]
  (if (= "connected" (.-status response))
    (rf/dispatch [:auth/login (auth-response->map (.-authResponse response))])
    (rf/dispatch [:auth/failure {:reason (.-status response)}])))

(defn- ensure-init []
  (when (and (exists? js/FB) (not @initialized?))
    (.init js/FB
           #js {:appId   app-id
                :cookie  true
                :xfbml   true
                :version "v19.0"})
    (reset! initialized? true)))

(defn login []
  (ensure-init)
  (.login js/FB
          handle-login-response
          #js {:scope "public_profile,email"}))

(defn init []
  (ensure-init))
