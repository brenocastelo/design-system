import { MultistepContainer, MultistepLabel, Steps, Step } from './styles';

export type MultistepProps = {
  size: number;
  currentStep?: number;
};

export function Multistep({ size, currentStep = 0 }: MultistepProps) {
  const steps = Array.from({ length: size }, (_, index) => index + 1);

  return (
    <MultistepContainer>
      <MultistepLabel>
        Step {currentStep} of {size}
      </MultistepLabel>
      <Steps css={{ '--steps-size': size }}>
        {steps.map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultistepContainer>
  );
}
