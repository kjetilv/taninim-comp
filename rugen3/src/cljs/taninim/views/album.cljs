(ns taninim.views.album
  (:require [re-frame.core :as rf]))

(defn- format-duration [seconds]
  (let [s (int seconds)
        m (quot s 60)
        ss (rem s 60)]
    (str m ":" (when (< ss 10) "0") ss)))

(defn track-item [track]
  [:div.track-item
   {:on-click #(rf/dispatch [:player/play track])}
   [:span.track-number (:no track)]
   [:span.track-title (:name track)]
   [:span.track-duration (format-duration (:seconds track))]])

(defn track-list [album]
  [:div.track-list
   (for [section (:sections album)
         track (:tracks section)]
     ^{:key (:uuid track)}
     [track-item track])])
