import { Button, SegmentedControl, Group } from '@mantine/core';
import type { FC } from 'react';
import { useState } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

interface BodyEditorProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export const BodyRequest: FC<BodyEditorProps> = ({ value, onChange, readOnly }) => {
  const [bodyType, setBodyType] = useState<'json' | 'text'>('json');

  const handleChange = (value: string) => {
    if (value === 'json' || value === 'text') {
      setBodyType(value);
    }
  };
  return (
    <>
      <p>Body:</p>
      <SegmentedControl
        value={bodyType}
        onChange={(value) => handleChange(value)}
        data={[
          { label: 'JSON', value: 'json' },
          { label: 'Text', value: 'text' },
        ]}
      />

      <TextArea
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={bodyType === 'json' ? 'Write JSON here...' : 'Write plain text here...'}
      />

      {bodyType === 'json' && (
        <Group>
          <Button>Prettify</Button>
        </Group>
      )}
    </>
  );
};
