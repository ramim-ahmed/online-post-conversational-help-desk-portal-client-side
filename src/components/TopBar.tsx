import Profile from './Profile';
import Switcher from './Switcher';

export default function TopBar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex px-3 justify-between md:flex-row flex-col items-center py-3">
          <div>
            <h1 className="text-2xl font-bold">HELP DESK</h1>
          </div>
          <div className="flex items-center space-x-4">
            <p>My Classes</p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </p>
            <Profile />
            <Switcher />
          </div>
        </div>
      </div>
    </header>
  );
}
