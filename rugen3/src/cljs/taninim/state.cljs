(ns taninim.state
  (:require [re-frame.core :as rf]))

(def default-db
  {:auth    {:user-id nil :fb-user-id nil :token nil :status :unauthenticated}
   :library {:albums [] :loading? false}
   :leases  {:active #{} :pending #{}}
   :player  {:current-track nil :playlist [] :position 0 :state :stopped}})

(rf/reg-event-db
  :initialize-db
  (fn [_ _]
    default-db))

(rf/reg-sub :auth (fn [db _] (:auth db)))
(rf/reg-sub :auth-status (fn [db _] (get-in db [:auth :status])))
(rf/reg-sub :auth-token (fn [db _] (get-in db [:auth :token])))

(rf/reg-sub :library (fn [db _] (:library db)))
(rf/reg-sub :albums (fn [db _] (get-in db [:library :albums])))
(rf/reg-sub :library-loading? (fn [db _] (get-in db [:library :loading?])))

(rf/reg-sub :leases (fn [db _] (:leases db)))
(rf/reg-sub :active-leases (fn [db _] (get-in db [:leases :active])))

(rf/reg-sub :player (fn [db _] (:player db)))
(rf/reg-sub :player-state (fn [db _] (get-in db [:player :state])))
(rf/reg-sub :current-track (fn [db _] (get-in db [:player :current-track])))
