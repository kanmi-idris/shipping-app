export interface RootLayoutProps {
  children: React.ReactNode;
}

interface AuthFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export interface AuthFormProps {
  heading: string;
  subHeading: string;
  fields: AuthFieldProps[];
  buttonText: string;
  otherActionText: string;
  linkText: string;
  linkHref: string;
}

export interface CustomButtonProps {
  buttonText: string;
  mutationFn: () => void;
  style: string;
}

export interface Item {
  description: string;
  quantity: number;
  status: string;
  dateReceived?: string;
  expectedDeliveryDate?: string;
  trackingNumber?: string;
}
