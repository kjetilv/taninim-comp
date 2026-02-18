(ns taninim.views.player
  (:require [re-frame.core :as rf]
            [taninim.api :as api]))

(defn player-bar []
  (let [player @(rf/subscribe [:player])
        token @(rf/subscribe [:auth-token])
        track (:current-track player)
        state (:state player)]
    (when track
      [:div.player-bar
       [:div.track-info
        [:span.track-title (:name track)]
        [:span.track-artist (:artist track)]]
       [:div.controls
        [:button {:on-click #(rf/dispatch [:player/stop])} "Stop"]
        (case state
          :playing [:button {:on-click #(rf/dispatch [:player/pause])} "Pause"]
          :paused  [:button {:on-click #(rf/dispatch [:player/play track])} "Play"]
          nil)]])))
