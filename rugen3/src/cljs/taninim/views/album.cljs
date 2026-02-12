(ns taninim.views.album
  (:require [re-frame.core :as rf]))

(defn track-item [track]
  [:div.track-item
   {:on-click #(rf/dispatch [:player/play track])}
   [:span.track-number (:no track)]
   [:span.track-title (:name track)]
   [:span.track-duration (:seconds track)]])

(defn track-list [album]
  [:div.track-list
   (for [section (:sections album)
         track (:tracks section)]
     ^{:key (:uuid track)}
     [track-item track])])
