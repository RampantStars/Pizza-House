import { Link } from 'react-router-dom';
import { useUserStore } from '../../Utils/Stores/UserStore';

import styles from './UserControls.module.scss';

export const UserControls = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className={styles.userControls}>
      {user.roles.find((role) => role.value.toUpperCase() === 'ADMIN') ? (
        <Link to="/admin">
          <svg
            width="50px"
            height="50px"
            clipRule="evenodd"
            fillRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 28444 28444"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <linearGradient
              id="id0"
              gradientUnits="userSpaceOnUse"
              x1="14222.2"
              x2="14222.2"
              y1="24847.2"
              y2="3597.22">
              <stop offset="0" stopColor="#ff81ff" />
              <stop offset="1" stopColor="#a93aff" />
            </linearGradient>
            <g id="Layer_x0020_1">
              <path
                d="m15796 6702c940 196 1831 568 2630 1091l2446-1946 1727 1727-1946 2446c523 799 894 1688 1090 2630l3105 353v2443l-3105 353c-196 941-567 1831-1090 2630l1946 2445-1727 1727-2446-1946c-798 523-1689 894-2630 1090l-353 3104h-2443l-353-3104c-940-196-1831-568-2630-1091l-2446 1946-1727-1727 1946-2446c-523-799-894-1688-1090-2630l-3105-353v-2443l3105-353c196-941 567-1831 1090-2630l-1946-2445 1727-1727 2446 1946c798-523 1689-894 2630-1090l353-3104h2443zm-1574 2466c2791 0 5054 2263 5054 5054s-2267 5054-5054 5054c-2788 0-5054-2264-5054-5054 0-2791 2263-5054 5054-5054zm2834 8405c-231-908-899-1661-1772-2005-673 316-1450 316-2124 0-874 343-1540 1093-1772 2005 1634 1384 4033 1384 5668 0zm-1954-2658c580-319 946-927 946-1601 0-1009-818-1826-1826-1826-1009 0-1826 818-1826 1826 0 674 367 1282 946 1601 547 301 1213 301 1760 0z"
                fill="url(#id0)"
              />
            </g>
          </svg>
        </Link>
      ) : (
        ''
      )}
      {user.roles.find((role) => role.value.toUpperCase() === 'MANAGER') ? (
        <Link to="/manager">
          <svg width="50px" height="50px" viewBox="0 0 512 512">
            <path
              d="m493.061 79.407v252.333h-474.979v-252.333a29.677 29.677 0 0 1 29.686-29.686h415.607a29.677 29.677 0 0 1 29.686 29.686z"
              fill="#d6faec"
            />
            <path
              d="m493.041 309.46v22.265h-474.98v-252.333a29.688 29.688 0 0 1 23.007-28.944 32.9 32.9 0 0 0 -.742 6.679c0 139.359 112.973 252.332 252.333 252.332z"
              fill="#adf7d9"
            />
            <path
              d="m493.061 331.74v14.843a29.678 29.678 0 0 1 -29.686 29.686h-415.607a29.678 29.678 0 0 1 -29.686-29.686v-14.843z"
              fill="#686169"
            />
            <path
              d="m318.189 435.627h-118.745l11.207-44.753.667-2.819 2.969-11.801h89.059l2.969 11.801.667 2.819z"
              fill="#d7d7d7"
            />
            <path
              d="m423.946 238.213-45.791 27.163-68.798-27.163 6.235-14.397 51.06-117.409 51.06 117.409z"
              fill="#ffe589"
            />
            <path
              d="m88.121 173.201h133.588"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="14.843"
            />
            <path
              d="m162.336 462.641h192.964v-14.841a14.843 14.843 0 0 0 -14.843-14.843h-163.277a14.843 14.843 0 0 0 -14.844 14.843z"
              fill="#686169"
            />
            <path d="m243.963 84.142h-178.107v207.803h178.118z" fill="#2fd9e7" />
            <path d="m88.121 106.407h133.588v14.843h-133.588z" fill="#f8f7f7" />
            <path d="m88.121 136.093h133.588v14.843h-133.588z" fill="#ffe589" />
            <path d="m88.121 195.465h66.794v14.843h-66.794z" fill="#f8f7f7" />
            <path
              d="m184.6 258.548a7.4 7.4 0 0 1 -5.247-2.174l-11.133-11.132a7.421 7.421 0 0 1 10.5-10.495l6.226 6.226 24.46-21.409a7.422 7.422 0 1 1 9.77 11.175l-29.686 25.976a7.4 7.4 0 0 1 -4.89 1.833z"
              fill="#ffe589"
            />
            <path
              d="m352.2 222.252a7.422 7.422 0 1 1 -.072-14.843h.072a7.422 7.422 0 1 1 0 14.843z"
              fill="#ff6167"
            />
            <path
              d="m382.3 207.409a7.422 7.422 0 0 1 -.072-14.843h.072a7.422 7.422 0 1 1 0 14.843z"
              fill="#1fbd92"
            />
            <path
              d="m367.255 177.723a7.422 7.422 0 0 1 -.072-14.843h.072a7.422 7.422 0 1 1 0 14.843z"
              fill="#ff6167"
            />
            <path
              d="m258.817 410.69a7.35 7.35 0 0 1 -7.422-7.421 6.18 6.18 0 0 1 .594-2.82 7.645 7.645 0 0 1 1.559-2.449 7.768 7.768 0 0 1 10.538 0 7.659 7.659 0 0 1 1.558 2.449 7.345 7.345 0 0 1 -1.558 8.089 8.63 8.63 0 0 1 -2.45 1.558 7.411 7.411 0 0 1 -2.819.594z"
              fill="#686169"
            />
            <path
              d="m423.946 238.213-45.791 27.163-68.8-27.163 6.235-14.4a29.952 29.952 0 0 1 3.71.89c11.133 3.562 28.277 7.867 47.35 7.867 19 0 36.217-4.305 47.275-7.867a34.77 34.77 0 0 1 3.785-.89z"
              fill="#ffdb5c"
            />
            <path
              d="m297.5 246.679a14.156 14.156 0 0 1 17.279-7.826 161.309 161.309 0 0 0 103.719 0 14.156 14.156 0 0 1 17.279 7.826 13.876 13.876 0 0 1 -7.792 18.506c-13.45 5.177-35.855 11.918-61.347 11.918s-47.9-6.741-61.347-11.918a13.874 13.874 0 0 1 -7.791-18.505z"
              fill="#e0925b"
            />
            <path
              d="m306.982 390.874h-96.331c.851-3.6.1-.552 3.636-14.62h89.059c3.391 13.478 2.754 10.875 3.636 14.62z"
              fill="#c8c8c8"
            />
          </svg>
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};
