export default function Footer() {
  return (
    <>
      <footer className="bg-slate-400 rounded-base shadow-xs ">
        <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://github.com/paddyv1"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/960px-Octicons-mark-github.svg.png?_=20180806170715"
                className="h-7"
                alt="Flowbite Logo"
              />
              <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                paddyv1
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
              <li>
                <a href="" className="hover:underline me-4 md:me-6">
                  Im not
                </a>
              </li>
              <li>
                <a href="" className="hover:underline me-4 md:me-6">
                  Clouted Enough
                </a>
              </li>
              <li>
                <a href="" className="hover:underline me-4 md:me-6">
                  To Have These
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Yet....
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-default sm:mx-auto lg:my-8" />
          <span className="block text-sm text-body sm:text-center">
            © 2026{" "}
            <a href="https://github.com/paddyv1" className="hover:underline">
              whoneedsthis™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
