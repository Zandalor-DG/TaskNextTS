import React from 'react';
import { ContextState } from '../entities/action/Action';

export const DataContext = React.createContext<Partial<ContextState>>({});
