import Frame from "../assets/profile-frame.svg";

export default function ProfileCard({ name, img }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        viewBox="0 0 174.5 233.7"
        className="w-32 h-44 sm:w-36 sm:h-48 md:w-40 md:h-52"
      >
        <defs>
          {/* AREA FOTO (DALAM FRAME) */}
          <clipPath id="photo-clip">
            {/* x, y, width, height → DISESUAIKAN */}
            <rect x="10" y="40" width="154.5" height="165" rx="8" />
          </clipPath>
        </defs>

        {/* FOTO */}
        <image
          href={img}
          width="174.5"
          height="233.7"
          clipPath="url(#photo-clip)"
          preserveAspectRatio="xMidYMid slice"
        />

        {/* FRAME SVG */}
        <image href={Frame} width="174.5" height="233.7" />
      </svg>

      <p className="text-sm text-center">{name}</p>
    </div>
  );
}
