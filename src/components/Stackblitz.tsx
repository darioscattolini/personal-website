import React, { useEffect, useRef } from 'react';
import sdk from '@stackblitz/sdk'

export default function Stackblitz(props): JSX.Element {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      sdk.embedProjectId(
        container.current,
        'typescript-static-interfaces-1',
        {
          openFile: 'index.ts',
        }
      );
    }
  });

  return(
    <div ref={container}></div>
  );
}
