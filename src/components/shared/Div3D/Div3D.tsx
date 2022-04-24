import React from 'react';
import { PartialRecord } from '@site/src/utilities/partial-record';
import styles from './Div3D.module.css';

type SupportedEvent = 'onClick' | 'onMouseOver';
type EventHandler = React.EventHandler<React.SyntheticEvent>;
type EventHandlers = PartialRecord<SupportedEvent, EventHandler>;

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  interactive?: boolean;
  eventHandlers?: EventHandlers;
}

/**
 * Builds `<div>` element with 3D effects, wrapping the content passed as
 * children. Optional `props`:
 * * `className`: passes down styles from parent component. Avoid including
 *   transitions in those styles if `Div3D` is interactive, as it would clash
 *   with built-in transitions.
 * * `interactive`: if `true`, adds 3d movement effect on hover and active      
 *   events.
 * * `eventHandlers`: object containing any needed event handlers. Only
 *   available for supported events (`onClick`, `onMouseOver`)
 * @param props{Props} Component's props
 * @returns{JSX.Element} Children wrapped in `Div3D`
 */
export default function Div3D(
  { children, className, interactive, eventHandlers }: Props
): JSX.Element {
  let classNames = styles.div3d;
  if (className) classNames += ` ${className}`;
  if (interactive) classNames += ` ${styles.interactive}`;

  return (
    <div className={ classNames } { ...eventHandlers }>
      { children }
    </div>
  );
}
