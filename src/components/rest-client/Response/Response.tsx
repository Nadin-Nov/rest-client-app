import type { FC } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

interface ResponseStatusProps {
  status: number | null;
  body: string;
}
export const ResponseStatus: FC<ResponseStatusProps> = ({ status, body }) => {
  return (
    <>
      <div>Status:{status !== null ? status : 'No response yet'}</div>
      <div>Body:</div>
      <TextArea value={body} placeholder='Response will appear here' readOnly={true} />
    </>
  );
};
