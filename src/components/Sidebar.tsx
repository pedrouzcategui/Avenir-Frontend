import clsx from "clsx";
import { useState } from "react";
import {
  LuLayoutPanelLeft,
  LuCalculator,
  LuBanknote,
  LuUser,
  LuDoorOpen,
  LuChevronDown,
  LuBitcoin,
  LuGem,
} from "react-icons/lu";
import { AiOutlineBank } from "react-icons/ai";
import { Fragment } from "react/jsx-runtime";

interface NavSectionProps {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
  isFinal: boolean;
}

interface NavOptionProps {
  title: string;
  Icon: JSX.Element;
  subNavigationOptions?: NavOptionProps[];
  className?: string;
}

interface SidebarDescription {
  title?: string;
  navigation_options: NavOptionProps[];
}

const SIDEBAR_DESCRIPTION: SidebarDescription[] = [
  {
    title: "Administración",
    navigation_options: [
      {
        title: "Panel Administrativo",
        Icon: <LuLayoutPanelLeft />,
      },
      {
        title: "Balance General",
        Icon: <LuGem />,
      },
      {
        title: "Cuentas",
        Icon: <LuBanknote />,
        subNavigationOptions: [
          {
            title: "Bancamiga",
            Icon: <AiOutlineBank />,
          },
          {
            title: "Crypto",
            Icon: <LuBitcoin />,
          },
          {
            title: "Cash",
            Icon: <LuBanknote />,
          },
        ],
      },
      {
        title: "Presupuestos",
        Icon: <LuCalculator />,
      },
    ],
  },
  {
    title: "Cuenta",
    navigation_options: [
      {
        title: "Ajustes de la cuenta",
        Icon: <LuUser />,
      },
    ],
  },
  {
    navigation_options: [
      {
        title: "Logout",
        Icon: <LuDoorOpen />,
      },
    ],
  },
];

function NavOption({
  Icon,
  title,
  subNavigationOptions,
  className,
}: NavOptionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const doMoreNavigationOptionsExist = !!subNavigationOptions;

  return (
    <Fragment>
      <li
        className={clsx(
          "py-2 px-2 mb-2 rounded-sm cursor-pointer transition-colors hover:bg-slate-700",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {Icon}
            <span className="text-sm">{title}</span>
          </div>
          {doMoreNavigationOptionsExist && (
            <span>
              <LuChevronDown />
            </span>
          )}
        </div>
      </li>
      {doMoreNavigationOptionsExist && isOpen && (
        <ul>
          {subNavigationOptions.map(({ title, Icon }, i) => (
            <NavOption
              key={i}
              className="ml-4 mb-0"
              title={title}
              Icon={Icon}
            />
          ))}
        </ul>
      )}
    </Fragment>
  );
}

function NavSection({ title, children, isFinal }: NavSectionProps) {
  return (
    <Fragment>
      {title && (
        <span className="text-xs mb-3 block text-slate-400">{title}</span>
      )}
      {children}

      {!isFinal && <hr className="mb-3 border-slate-600" />}
    </Fragment>
  );
}

export default function Sidebar() {
  return (
    <nav className="col-span-1 h-screen bg-slate-800 text-white px-6 py-4">
      <ul>
        {SIDEBAR_DESCRIPTION.map(({ title, navigation_options }, i) => (
          <NavSection
            key={i}
            title={title}
            isFinal={i == SIDEBAR_DESCRIPTION.length - 1}
          >
            {navigation_options.map(
              ({ title, Icon, subNavigationOptions }, i) => (
                <NavOption
                  key={`${title}-${i}`}
                  Icon={Icon}
                  title={title}
                  subNavigationOptions={subNavigationOptions}
                />
              )
            )}
          </NavSection>
        ))}
      </ul>
    </nav>
  );
}
