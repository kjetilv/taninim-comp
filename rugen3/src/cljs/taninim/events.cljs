(ns taninim.events
  (:require [re-frame.core :as rf]
            [taninim.api :as api]))

;; --- Auth ---

(rf/reg-event-fx
  :auth/login
  (fn [{:keys [db]} [_ ext-auth-response]]
    {:db (-> db
             (assoc-in [:auth :status] :authenticating)
             (assoc-in [:auth :fb-user-id] (:userID ext-auth-response)))
     :fx [[:dispatch [:api/authenticate ext-auth-response]]]}))

(rf/reg-event-db
  :auth/success
  (fn [db [_ {:keys [user-id token]}]]
    (-> db
        (assoc-in [:auth :user-id] user-id)
        (assoc-in [:auth :token] token)
        (assoc-in [:auth :status] :authenticated))))

(rf/reg-event-db
  :auth/failure
  (fn [db [_ _error]]
    (assoc-in db [:auth :status] :unauthenticated)))

;; --- Library ---

(rf/reg-event-fx
  :library/fetch
  (fn [{:keys [db]} _]
    {:db (assoc-in db [:library :loading?] true)
     :fx [[:dispatch [:api/fetch-library]]]}))

(rf/reg-event-db
  :library/loaded
  (fn [db [_ albums]]
    (-> db
        (assoc-in [:library :albums] albums)
        (assoc-in [:library :loading?] false))))

(rf/reg-event-db
  :library/fetch-failed
  (fn [db [_ _error]]
    (-> db
        (assoc-in [:library :loading?] false)
        (assoc-in [:library :error] true))))

;; --- Leases ---

(rf/reg-event-fx
  :lease/acquire
  (fn [{:keys [db]} [_ album-id]]
    {:db (update-in db [:leases :pending] conj album-id)
     :fx [[:dispatch [:api/acquire-lease album-id]]]}))

(rf/reg-event-db
  :lease/acquired
  (fn [db [_ album-id]]
    (-> db
        (update-in [:leases :pending] disj album-id)
        (update-in [:leases :active] conj album-id))))

(rf/reg-event-fx
  :lease/release
  (fn [{:keys [db]} [_ album-id]]
    {:fx [[:dispatch [:api/release-lease album-id]]]}))

(rf/reg-event-db
  :lease/released
  (fn [db [_ album-id]]
    (update-in db [:leases :active] disj album-id)))

(rf/reg-event-db
  :lease/acquire-failed
  (fn [db [_ album-id _error]]
    (update-in db [:leases :pending] disj album-id)))

(rf/reg-event-db
  :lease/release-failed
  (fn [db [_ _album-id _error]]
    db))

;; --- Player ---

(rf/reg-event-fx
  :player/play
  (fn [{:keys [db]} [_ track]]
    (js/console.log "player/play" (clj->js track))
    (let [token (get-in db [:auth :token])]
      {:db (-> db
               (assoc-in [:player :current-track] track)
               (assoc-in [:player :state] :playing))
       :audio/play {:track track :token token}})))

(rf/reg-event-fx
  :player/pause
  (fn [{:keys [db]} _]
    {:db (assoc-in db [:player :state] :paused)
     :audio/pause true}))

(rf/reg-event-fx
  :player/stop
  (fn [{:keys [db]} _]
    {:db (-> db
             (assoc-in [:player :current-track] nil)
             (assoc-in [:player :state] :stopped)
             (assoc-in [:player :position] 0))
     :audio/stop true}))

(rf/reg-event-db
  :player/set-playlist
  (fn [db [_ tracks]]
    (assoc-in db [:player :playlist] tracks)))
