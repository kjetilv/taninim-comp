(ns taninim.audio
  (:require [re-frame.core :as rf]
            [taninim.api :as api]))

(defonce ^:private current-audio (atom nil))

(rf/reg-fx
  :audio/play
  (fn [{:keys [track token]}]
    (when-let [old @current-audio]
      (.pause old))
    (let [url (api/audio-url (:uuid track) (:format track) token)]
      (js/console.log "audio/play" url)
      (let [audio (js/Audio. url)]
        (reset! current-audio audio)
        (.play audio)))))

(rf/reg-fx
  :audio/pause
  (fn [_]
    (when-let [audio @current-audio]
      (.pause audio))))

(rf/reg-fx
  :audio/resume
  (fn [_]
    (when-let [audio @current-audio]
      (.play audio))))

(rf/reg-fx
  :audio/stop
  (fn [_]
    (when-let [audio @current-audio]
      (.pause audio)
      (set! (.-currentTime audio) 0)
      (reset! current-audio nil))))
