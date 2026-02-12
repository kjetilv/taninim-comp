(ns taninim.views.auth
  (:require [re-frame.core :as rf]
            [taninim.fb :as fb]))

(defn login-view []
  [:div.auth
   [:h1 "Taninim"]
   [:p.auth-subtitle "Sign in to access your music library"]
   [:button.login-btn
    {:on-click #(fb/login)}
    "Sign in with Facebook"]])
