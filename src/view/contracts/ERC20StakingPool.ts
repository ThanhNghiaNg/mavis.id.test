/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ERC20StakingPoolInterface extends utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "changeAdmin(address)": FunctionFragment;
    "claimPendingRewards()": FunctionFragment;
    "emergencyUnstake()": FunctionFragment;
    "getPendingRewards(address)": FunctionFragment;
    "getRewardToken()": FunctionFragment;
    "getStakingAmount(address)": FunctionFragment;
    "getStakingToken()": FunctionFragment;
    "getStakingTotal()": FunctionFragment;
    "methodPaused(bytes4)": FunctionFragment;
    "pause(bytes4)": FunctionFragment;
    "pauseAll()": FunctionFragment;
    "paused(bytes4)": FunctionFragment;
    "removeAdmin()": FunctionFragment;
    "restakeRewards()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "unpause(bytes4)": FunctionFragment;
    "unpauseAll()": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
    "unstakeAll()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "admin"
      | "changeAdmin"
      | "claimPendingRewards"
      | "emergencyUnstake"
      | "getPendingRewards"
      | "getRewardToken"
      | "getStakingAmount"
      | "getStakingToken"
      | "getStakingTotal"
      | "methodPaused"
      | "pause"
      | "pauseAll"
      | "paused"
      | "removeAdmin"
      | "restakeRewards"
      | "stake"
      | "unpause"
      | "unpauseAll"
      | "unstake"
      | "unstakeAll"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "changeAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimPendingRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyUnstake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "methodPaused",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "pauseAll", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restakeRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "unpause", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "unpauseAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAll",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimPendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyUnstake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "methodPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pauseAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restakeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpauseAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstakeAll", data: BytesLike): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "AdminRemoved(address)": EventFragment;
    "EmergencyUnstaked(address,address,uint256)": EventFragment;
    "RewardClaimed(address,address,uint256)": EventFragment;
    "Staked(address,address,uint256)": EventFragment;
    "Unstaked(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyUnstaked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstaked"): EventFragment;
}

export interface AdminChangedEventObject {
  _oldAdmin: string;
  _newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface AdminRemovedEventObject {
  _oldAdmin: string;
}
export type AdminRemovedEvent = TypedEvent<[string], AdminRemovedEventObject>;

export type AdminRemovedEventFilter = TypedEventFilter<AdminRemovedEvent>;

export interface EmergencyUnstakedEventObject {
  _user: string;
  _token: string;
  _amount: BigNumber;
}
export type EmergencyUnstakedEvent = TypedEvent<
  [string, string, BigNumber],
  EmergencyUnstakedEventObject
>;

export type EmergencyUnstakedEventFilter =
  TypedEventFilter<EmergencyUnstakedEvent>;

export interface RewardClaimedEventObject {
  _user: string;
  _token: string;
  _amount: BigNumber;
}
export type RewardClaimedEvent = TypedEvent<
  [string, string, BigNumber],
  RewardClaimedEventObject
>;

export type RewardClaimedEventFilter = TypedEventFilter<RewardClaimedEvent>;

export interface StakedEventObject {
  _user: string;
  _token: string;
  _amount: BigNumber;
}
export type StakedEvent = TypedEvent<
  [string, string, BigNumber],
  StakedEventObject
>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface UnstakedEventObject {
  _user: string;
  _token: string;
  _amount: BigNumber;
}
export type UnstakedEvent = TypedEvent<
  [string, string, BigNumber],
  UnstakedEventObject
>;

export type UnstakedEventFilter = TypedEventFilter<UnstakedEvent>;

export interface ERC20StakingPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20StakingPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    admin(overrides?: CallOverrides): Promise<[string]>;

    changeAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimPendingRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyUnstake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardToken(overrides?: CallOverrides): Promise<[string]>;

    getStakingAmount(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakingToken(overrides?: CallOverrides): Promise<[string]>;

    getStakingTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    methodPaused(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    pause(
      _method: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pauseAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(_method: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    removeAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    restakeRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      _method: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpauseAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  changeAdmin(
    _newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimPendingRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyUnstake(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPendingRewards(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardToken(overrides?: CallOverrides): Promise<string>;

  getStakingAmount(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakingToken(overrides?: CallOverrides): Promise<string>;

  getStakingTotal(overrides?: CallOverrides): Promise<BigNumber>;

  methodPaused(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  pause(
    _method: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pauseAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(_method: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  removeAdmin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  restakeRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    _method: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpauseAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeAll(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    changeAdmin(_newAdmin: string, overrides?: CallOverrides): Promise<void>;

    claimPendingRewards(overrides?: CallOverrides): Promise<void>;

    emergencyUnstake(overrides?: CallOverrides): Promise<void>;

    getPendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardToken(overrides?: CallOverrides): Promise<string>;

    getStakingAmount(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingToken(overrides?: CallOverrides): Promise<string>;

    getStakingTotal(overrides?: CallOverrides): Promise<BigNumber>;

    methodPaused(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    pause(_method: BytesLike, overrides?: CallOverrides): Promise<void>;

    pauseAll(overrides?: CallOverrides): Promise<void>;

    paused(_method: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    removeAdmin(overrides?: CallOverrides): Promise<void>;

    restakeRewards(overrides?: CallOverrides): Promise<void>;

    stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    unpause(_method: BytesLike, overrides?: CallOverrides): Promise<void>;

    unpauseAll(overrides?: CallOverrides): Promise<void>;

    unstake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    unstakeAll(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      _oldAdmin?: string | null,
      _newAdmin?: string | null
    ): AdminChangedEventFilter;
    AdminChanged(
      _oldAdmin?: string | null,
      _newAdmin?: string | null
    ): AdminChangedEventFilter;

    "AdminRemoved(address)"(_oldAdmin?: string | null): AdminRemovedEventFilter;
    AdminRemoved(_oldAdmin?: string | null): AdminRemovedEventFilter;

    "EmergencyUnstaked(address,address,uint256)"(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): EmergencyUnstakedEventFilter;
    EmergencyUnstaked(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): EmergencyUnstakedEventFilter;

    "RewardClaimed(address,address,uint256)"(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): RewardClaimedEventFilter;
    RewardClaimed(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): RewardClaimedEventFilter;

    "Staked(address,address,uint256)"(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): StakedEventFilter;
    Staked(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): StakedEventFilter;

    "Unstaked(address,address,uint256)"(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): UnstakedEventFilter;
    Unstaked(
      _user?: string | null,
      _token?: string | null,
      _amount?: BigNumberish | null
    ): UnstakedEventFilter;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    changeAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimPendingRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyUnstake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    getStakingAmount(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    getStakingTotal(overrides?: CallOverrides): Promise<BigNumber>;

    methodPaused(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pause(
      _method: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pauseAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(_method: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    removeAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    restakeRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      _method: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpauseAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeAdmin(
      _newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimPendingRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyUnstake(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPendingRewards(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakingAmount(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakingTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    methodPaused(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pause(
      _method: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pauseAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(
      _method: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    restakeRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      _method: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpauseAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeAll(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
