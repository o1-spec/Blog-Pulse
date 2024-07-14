import { toast } from "react-toastify";

export const Excerpts = (str: string, count: number) => {
  if (str?.length > count) {
    str = str.substring(0, count) + " ... ";
  }
  return str;
};

export const SuccessToast = (message: string) => {
  return toast.success(message, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      fontSize: "1rem",
    },
  });
};

export const ErrorToast = (message: string) => {
  return toast.error(message, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      fontSize: "1rem",
    },
  });
};
