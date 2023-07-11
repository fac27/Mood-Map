export interface IEntry {
  user_id?: string;
  mood: number;
  mood_date: string;
  journal_entry?: string;
  context_people?: string;
  context_location?: string;
  id?: number;
}

export interface IUsersEntry extends IEntry {
  user_id: string;
}

export interface IEntryWithID extends IEntry {
  id: number;
}

export type FormElement = {
  name: string;
  heading: string;
} & (RadioElement | { type: "date" | "text" });

type RadioElement = {
  type: "radio";
  options: string[];
};
export interface IInputElementProps {
  formElement: FormElement;
  value: string;
  state: [any, any];
}

export interface IDetailsModalProps {
  emotion: number;
  onClose: () => void;
  session: any; //supabase session object
}

export type hexValue = `#${string}`;

export interface IBlobSvg {
  id: number;
  viewBox: string;
  xmlns: string;
  colour: "dark" | "light";
  path: {
    fill: hexValue;
    d: string;
    transform: string;
  };
}
