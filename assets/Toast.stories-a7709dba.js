var s=Object.defineProperty;var o=(t,e)=>s(t,"name",{value:e,configurable:!0});import{d as a,B as i,$ as p,e as c}from"./index-195889f5.js";import{r as l}from"./index-46b65b01.js";import{j as n,a as r}from"./jsx-runtime-f926e2be.js";import"./index-c9dda752.js";import"./iframe-6a2d7a08.js";const b={parameters:{storySource:{source:`import { StoryObj, Meta } from '@storybook/react';
import {
  Box,
  Toast,
  ToastProvider,
  ToastProps,
  ToastViewport,
} from '@br-ignite-ui/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import { useState } from 'react';

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
  },
  decorators: [
    (Story: () => StoryFnReactReturnType) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '$gray200',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<ToastProps>;

export const Primary = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Toast!</button>
      <ToastProvider swipeDirection="left" duration={5000}>
        <Toast
          title="Agendamento realizado"
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          Quarta-feira, 23 de Outubro às 16h
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </div>
  );
};
`,locationsMap:{primary:{startLoc:{col:23,line:36},endLoc:{col:1,line:54},startBody:{col:23,line:36},endBody:{col:1,line:54}}}}},title:"Data display/Toast",component:a,args:{title:"Agendamento realizado"},decorators:[t=>n(i,{css:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"$gray200"},children:t()})]},g=o(()=>{const[t,e]=l.exports.useState(!1);return r("div",{children:[n("button",{onClick:()=>e(!0),children:"Toast!"}),r(p,{swipeDirection:"left",duration:5e3,children:[n(a,{title:"Agendamento realizado",open:t,onOpenChange:e,children:"Quarta-feira, 23 de Outubro às 16h"}),n(c,{})]})]})},"Primary"),x=["Primary"];export{g as Primary,x as __namedExportsOrder,b as default};
//# sourceMappingURL=Toast.stories-a7709dba.js.map
