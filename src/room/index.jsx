import React from "react";
import logo from "../logo.png";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const LivePage = () => {
  const { roomId } = useParams();

  const liveClass = async (element) => {
    const appID = 1600619734;
    const serverSecret = "73167369a04d66b8ebeeec6899cb2cc2";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Roshnee"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      turnOnCameraWhenJoining: false,
      showMyCameraToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: false,
      showTextChat: true,
      showUserList: false,
      scenario: {
        // live: true,
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
    });
  };

  return (
    <div className="LivePage">
      <div ref={liveClass} />
    </div>
  );
};

export default LivePage;
