(ns taninim.views.shell
  (:require [re-frame.core :as rf]
            [taninim.views.auth :as auth]
            [taninim.views.library :as library]
            [taninim.views.player :as player]))

(defn app []
  (let [auth-status @(rf/subscribe [:auth-status])]
    [:div.app
     (case auth-status
       :unauthenticated [auth/login-view]
       :authenticating  [:div.loading "Authenticating..."]
       :authenticated   [:div.main
                         [library/library-view]
                         [player/player-bar]])]))
