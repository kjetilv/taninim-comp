(ns taninim.core
  (:require [reagent.dom.client :as rdc]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]
            [taninim.audio]
            [taninim.events]
            [taninim.state]
            [taninim.fb :as fb]
            [taninim.views.shell :as shell]))

(defonce root
  (rdc/create-root (.getElementById js/document "app")))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (rdc/render root [shell/app]))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (set! js/window.fbAsyncInit fb/init)
  (mount-root))
