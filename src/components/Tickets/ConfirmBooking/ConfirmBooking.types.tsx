export type movie = {
    id: number;
    poster_path: string;
    title: string;
  };
export interface stateType {
    movie: movie;
  }
  
export type props = {
    children: React.ReactNode;
  
    closeModal: React.MouseEventHandler<HTMLButtonElement>;
    selectedSeats: string[];
    confirmedSeats?: string[] | null;
  };