const InfoLogo = ({ className, uniqueId }: { className?: string; uniqueId?: string } = {}) => {
  const gradientId = uniqueId
    ? `paint0_radial_${uniqueId}`
    : `paint0_radial_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><defs><image  width="20" height="20" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAAAXNSR0IB2cksfwAAAAZQTFRF//n5Ep7Z8IbD+AAAAAJ0Uk5TAP9bkSK1AAAAKUlEQVR4nGNkYGBgBOOEBYwMHwQgGMQGijG+F0CI4cCM3zkY4WYwMAAAQcAOFYDWuT8AAAAASUVORK5CYII="/></defs><style></style><use  href="#img1" x="0" y="0"/></svg>


  );
};

export default InfoLogo;
