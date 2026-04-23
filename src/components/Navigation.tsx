import type { FC } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: FC<NavigationProps> = ({ scrolled }) => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-300 ${
      scrolled ? 'bg-black/97 border-b border-border' : 'bg-transparent'
    }`}>
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('hero');
        }}
        className="nav-logo-link"
      >
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIEFkb2JlIElsbHVzdHJhdG9yIDI5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDIwMDEgMjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwMSAyMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjEzMzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuMTMzNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnIGlkPSJMYXllcl8wX2NvcHlfeEEwX0ltYWdlXzFfIj4KCQoJCTxpbWFnZSBzdHlsZT0iZGlzcGxheTpub25lO292ZXJmbG93OnZpc2libGU7b3BhY2l0eTowOyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJBc0FBQVFMQ0FZQUFBRHRPaUMzQUFBQUNYQklXWE1BQUFVVEFBQUZFd0ZhTzhwUEFBQWcKQUVsRVFWUjRuT3pkVzJ4YzYza2Y3bmRtcmVGSkpIV2dKRW9hU3FNWU1BS25EV0lnRGhyVVFIdVJ0bkhnTnIxSzAvb1FOM2FiRm5HRAp0RWlUMUdpYy9ndTRqdEVjZ01ScGMyRWtUclpURzJrYW9CZTljRytDMW1pYm9ybEpqMGtERkNEM0ppV1JsTFJGU1R6T1dqUC9DMlhOClhtdXhoZ2VKMU9iV2ZoNWdnNXN6c3c0ejFON2k5L3ZlNy8wYThVdy9BQUFBQUNLaStYYmZBQUFBQUhDMkNBc0FBQUNBQ21FQkFBQUEKVUNFc0FBQUFBQ3FFQlFBQUFFQ0ZzQUFBQUFDb0VCWUFBQUFBRmNJQ0FBQUFvRUpZQUFBQUFGUUlDd0FBQUlBS1lRRUFBQUJRSVN3QQpBQUFBS29RRkFBQUFRSVd3QUFBQUFLZ1FGZ0FBQUFBVndnSUFBQUJnb05Gb1JIclFrMlg5ZnY5SXJ3TUFBQURlMlZRV0FBQUFBQlVqCkt3dU9hbFRGQVFBQUFQRE8wMmcwVkJZQUFBQUFiK24zKy9zckM0N2Fxd0FBQUFCNE5ha3NBQUFBQUNxRUJRQUFBRUNGc0FBQUFBQ28KRUJZQUFBQUFGY0lDQUFBQW9FSllBQUFBQUZRSUN3QUFBSUFLWVFFQUFBQlEwWXlJYURRYWIvZDlBQUFBQUdlRXlnSUFBQUNnb2hrUgowZS8zMys3N0FBQUFBTTZJWTFjV05Cb055eFlBQUFEZ0ZXWVpBZ0FBQUZBaExBQUFBQUFxaEFVQUFBQkFoYkFBQUFBQXFCQVdBQUFBCkFCWENBZ0FBQUtCQ1dBQUFBQUJVQ0FzQUFBQ0FDbUVCQUFBQVVDRXNBQUFBQUNxRUJRQUFBRUNGc0FBQUFBQ29FQllBQUFBQUZjSUMKQUFBQW9FSllBQUFBQUZRSUN3QUFBSUFLWVFFQUFBQlFJU3dBQUFBQUtvUUZBQUFBUUlXd0FBQUFBS2dRRmdBQUFBQVZ3Z0lBQUFDZwpRbGdBQUFBQVZBZ0xBQUFBZ0FwaEFRQUFBRkFoTEFBQUFBQXFoQVVBQUFCQWhiQUFBQUFBcUJBV0FBQUFBQlhDQWdBQUFLQkNXQUFBCkFBQlVDQXNBNENWTGtpU1NKSG5scHdrQXZITUpDd0RnaERVYWpXZzBHbS8zYlFBQVBMZjA3YjRCQUhqVk5KdlBzdmc4endlUGxRT0UKWGU4MzlQWDExeTlFbWo3N0t6N0xzbjMzY3BSN0FnRGUzVlFXQU1BcEcxWmwwTy8zMzRZN0FRQTRtdUszbDhGdkxQVmZhT3EvekJUUAoreVVIQUlhci8xMVo5QW9ZTnJ2L3NveU5qVVZFeE43ZVh1WHh3LzdlQndEZW5WUVdBTURiNUtSN0d4emxmTVBDQVFFQkFGQ25zZ0FBClRzaFJLd2lLSGdYTlpqUDYvZjZKVlJ3YzluZDA4WHlqMFJqY2E3ZmJQWkZyQXdDdkZwVUZBUENLT0t4S1FOQVBBQnlWeWdJQU9DWDEKWFE1RzdYcHdHcnNoRlB5OURRQThENVVGQUFBQVFFWDZkdDhBQUx5cTZoVUQ5Y3FCWXRiL05Db0tDb2RWRkp5Rm5Sb0FnTE5IV0FBQQpwNlFZcURjYWplajMrL3VXQkJ5MUllRkI1d1lBT0EzQ0FnQTRKWG1lUjZQUmlHYXpHWTFHSTlJMGpYNi9IM3Q3ZTlIdjl3ZVBseXNNCjZrSENjZFVyQmVxQlJQRjhjYTFScndNQTN0MkVCUUJ3aWhxTlJzek16RVNyMVlvTEZ5NUVzOW1NM2QzZGlIZzJjQytxRHZyOS9zaGwKQ25YRmdIN1l3TDRJQU83ZnZ4OTVubGNDaUdIM0pod0FBSVlSRmdEQUtTZ3FCcWFucCtOREgvcFF0TnZ0K01oSFBoSVhMbHdZaEFERgpySDdSMjZCZVZWRC9XZzhKeWdQOWZyOGZXWmJGK3ZwNjNMdDNMLzc1UC8vbmNlK2V2VmhkWFkwc3kwWldISlREQ2dDQWdyQUFBRTVSCm1xWng5ZXJWdUhIalJ0eTZkU3N1WExnd0dMaG5XUllSTVZpT01Db3NxRHNvTEppYW1vcng4ZkhvZERveE1URVJFeE1Ua2VkNU5Kdk4KNlBmN3NiMjlIVm1XeFp0dnZubGcxUUVBOE81Vy9CWXkrRTJoL290Si9aY0lheG9CNEdpYXpXWmN2MzQ5ZnVtWGZpbHUzNzRkMy9JdAozeExqNCtPRDU0dGxCMFZsd1l2cTkvdlI3WFlqei9QWTJOaUlQTThqeTdMQjBvVGQzZDM0b3ovNm8xaFpXWW1mK1ptZmlmWDE5WDI3CklKU3JISTd6ZC9QUmZ6OFkxVVBCYmd3QWNMYW9MQUNBVTlSb05HSnljakltSnlmM0JmTERLZ2VldDdGaElVM1RTTk0wcmwyN1ZuazgKei9QWTJkbUpuWjJkYUxWYTBlbDBZbXBxS3ZJOGp6elA0OUdqUjVGbFdYUzczUk9aRURDNUFBRHZiTUlDQURnbHZWNHY4andPN2UzdApRZmwva2lTRDJmUlJXeW0raUZIOUQ1ck5aa3hPVHNiNzN2ZStlTzk3Ly8vWkZsV1d4dWJzYmUzbDdjdVhNbjd0MjcKRnovLzh6OGZhMnRyOGVEQmc4anpmSERmNVY0SkVXOVZXSlN2RmJILzg2c2ZQK3IxOWZPck1BQTRHY0lDQUlDYVlwQjhWTU1HdkVtUwpSSnFtY2ZYcTFVUS9nYUtDWUdGaElUcWRUa3hOVGUwTEtPcGwvZlYvc"
          alt="Lunacy Media Logo"
          className="nav-logo"
          width="48"
          height="64"
        />
      </a>

      <ul className="nav-links hidden md:flex gap-12 list-none">
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className="nav-link"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
            className="nav-link"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('work');
            }}
            className="nav-link"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#universe"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('universe');
            }}
            className="nav-link"
          >
            Universe
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="nav-link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
