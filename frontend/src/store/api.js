import { createAction } from "@reduxjs/toolkit";

export const apiCallBegun = createAction("api/callBegun");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");
