import { JitsiMeeting } from '@jitsi/react-sdk';

const MeetHome = () => {
  return (
    <div className="plato-meet-custom-style col-span-12 h-[calc(100vh-128px)] overflow-hidden rounded-lg border">
      <JitsiMeeting
        roomName={'plato-test-2241'}
        getIFrameRef={(node) => (node.style.height = '100%')}
        configOverwrite={{
          startWithAudioMuted: true,
          hiddenPremeetingButtons: ['microphone']
        }}
      />
    </div>
  );
};

export default MeetHome;
