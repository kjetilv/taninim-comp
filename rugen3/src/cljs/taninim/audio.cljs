(ns taninim.audio
  (:require [re-frame.core :as rf]
            [taninim.api :as api]))

(defonce ^:private current-audio (atom nil))

(defn- check-lease-status [url]
  (-> (js/fetch url #js {:headers #js {"Range" "bytes=0-0"}})
      (.then (fn [response]
               (if (= 451 (.-status response))
                 (rf/dispatch [:player/lease-expired])
                 (rf/dispatch [:error/show "Audio playback failed"]))))
      (.catch (fn [_]
                (rf/dispatch [:error/show "Audio playback failed"])))))

(rf/reg-fx
  :audio/play
  (fn [{:keys [track token]}]
    (when-let [old @current-audio]
      (.pause old)
      (reset! current-audio nil))
    (let [url (api/audio-url (:uuid track) (:format track) token)
          audio (js/Audio. url)]
      (set! (.-onerror audio)
        (fn [_]
          (reset! current-audio nil)
          (check-lease-status url)))
      (reset! current-audio audio)
      (.play audio))))

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
