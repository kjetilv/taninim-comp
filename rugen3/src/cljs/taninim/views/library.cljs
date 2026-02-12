(ns taninim.views.library
  (:require [re-frame.core :as rf]
            [taninim.views.album :as album]))

(defn- all-tracks [album]
  (mapcat :tracks (:sections album)))

(defn album-card [album active-leases]
  (let [leased? (contains? active-leases (:uuid album))]
    [:div.album-card {:class (when leased? "leased")}
     [:div.album-title (:name album)]
     [:div.album-artist (:artist album)]
     [:div.album-tracks (str (count (all-tracks album)) " tracks")]
     (if leased?
       [:button {:on-click #(rf/dispatch [:lease/release (:uuid album)])} "Release"]
       [:button {:on-click #(rf/dispatch [:lease/acquire (:uuid album)])} "Acquire"])
     (when leased?
       [album/track-list album])]))

(defn library-view []
  (rf/dispatch [:library/fetch])
  (fn []
    (let [albums @(rf/subscribe [:albums])
          loading? @(rf/subscribe [:library-loading?])
          active-leases @(rf/subscribe [:active-leases])]
      [:div.library
       [:h2 "Library"]
       (if loading?
         [:div.loading "Loading library..."]
         [:div.album-grid
          (for [album albums]
            ^{:key (:uuid album)}
            [album-card album active-leases])])])))
