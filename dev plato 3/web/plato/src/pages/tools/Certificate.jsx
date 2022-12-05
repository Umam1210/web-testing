import Tilt from 'react-parallax-tilt';

const CertificateHome = () => {
  return (
    <div className="col-span-12 flex h-[calc(100vh-128px)] items-center justify-center overflow-hidden rounded-lg border bg-zinc-900 p-24">
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareEnable={true}
        perspective={500}
        glarePosition="all"
        glareMaxOpacity={0.5}
        transitionSpeed={1500}>
        <div className="inline-flex flex-1 items-center justify-center bg-red-100">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-7289b7fef37b1bda2dc3527df90bfe87_screen.jpg" />
        </div>
      </Tilt>
    </div>
  );
};

export default CertificateHome;
