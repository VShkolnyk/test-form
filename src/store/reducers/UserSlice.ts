import {ICompany, IPerson} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface UserState {
  company: ICompany;
  person: IPerson;
  isGoNext: boolean;
  isSuccess: boolean;
  isExpandInfo: boolean;
  isOpenModal: boolean;
}

const initialState: UserState = {
  company: {
    companyCode: '',
    companyName: '',
    country: '',
  },
  person: {
    name: '',
    surname: '',
    jobTitle: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
  },
  isGoNext: false,
  isSuccess: false,
  isExpandInfo: false,
  isOpenModal: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    goToPersonalInfo(state, action: PayloadAction<ICompany>) {
      state.company = action.payload;
      state.isGoNext = true;
    },
    goBackToCompanyInfo(state) {
      state.isGoNext = false;
    },
    successForm(state, action: PayloadAction<IPerson>) {
      state.isSuccess = true;
      state.person = action.payload;
    },
    expandInfo(state) {
      state.isExpandInfo = !state.isExpandInfo;
    },
    openModal(state) {
      state.isOpenModal = !state.isOpenModal;
    }
  }
})

export default userSlice.reducer;
