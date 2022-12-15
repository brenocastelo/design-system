import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@br-ignite-ui/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/brenocastelo.png',
    alt: 'Breno Castelo Branco',
  },
};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
