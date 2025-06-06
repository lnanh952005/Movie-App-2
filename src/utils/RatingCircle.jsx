export const RatingCircle = ({ percent = 0, size = 3, strokeWidth = 0.25 }) => {
  const strokeColor =
    percent >= 70 ? "green" : percent >= 50 ? "orange" : "red";
  const radius = size / 2 - strokeWidth;
  return (
    <svg width={`${size}vw`} height={`${size}vw`}>
      <circle
        r={`${radius}vw`}
        cx={`${size / 2}vw`}
        cy={`${size / 2}vw`}
        stroke="white"
        strokeWidth={`${strokeWidth}vw`}
      ></circle>
      <circle
        r={`${radius}vw`}
        cx="50%"
        cy="50%"
        fill="none"
        shapeRendering="geometricPrecision"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}vw`}
        strokeDasharray={`${2 * Math.PI * radius}vw`}
        strokeDashoffset={`${2 * Math.PI * radius - (percent / 100) * 2 * Math.PI * radius}vw`}
        transform="rotate(-90)"
        style={{
          transformOrigin: "center",
        }}
      ></circle>
      <text
        x={`${size / 2}vw`}
        y={`${size / 2}vw`}
        fill="white"
        fontSize={"1.2vw"}
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        {percent}
      </text>
    </svg>
  );
};

//cv = 2*pi*r
