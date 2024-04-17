import { AnimatePresence, motion } from 'framer-motion';
import './styles.css';

interface PanesProps {
  panes: {
    id: string;
    label: string;
    value?: string | number;
    show?: boolean;
  }[];
  active: string;
  handleChange: (id: string) => void;
}

export const Panes = ({ panes, active, handleChange }: PanesProps) => {
  //todo make sure that the setactive prop is passed down as a prop

  return (
    <motion.div key={panes.toString()}>
      <ul className='pane-conatiner'>
        {panes
          .filter((pane) => pane.show)
          .map((pane) => (
            <li className='pane' key={pane.id}>
              <motion.button
                onClick={() => handleChange(pane.id)}
                key={pane.label}
              >
                <div className='flex items-center gap-x-[30px]'>
                  <span
                    className={`pane-label ${
                      active == pane.id && 'pane-label--active'
                    }`}
                  >
                    {pane.label}
                  </span>
                  {!!pane.value && (
                    <span
                      className={`pane-value ${
                        active == pane.id
                          ? 'pane-value--active'
                          : 'pane-value--inactive'
                      }`}
                    >
                      {pane.value}
                    </span>
                  )}
                </div>
              </motion.button>
              <AnimatePresence key={panes.toString()} initial={false}>
                {active == pane.id && (
                  <motion.div
                    className='pane-underline'
                    layoutId={location.pathname}
                  ></motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
      </ul>
    </motion.div>
  );
};
