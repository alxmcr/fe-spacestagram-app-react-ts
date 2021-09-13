import { HeartProps } from "../../componentsType/propsTypes";
import "./HeartIcon.scss"

export const HeartIcon = ({ className, fill, stroke }: HeartProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
        d="M11.47 5.246l.53.53.53-.53a5.108 5.108 0 117.224 7.224l-6.87 6.87a1.25 1.25 0 01-1.768 0l-6.87-6.87a5.108 5.108 0 017.224-7.224z"
      />
    </svg>
  );
};
