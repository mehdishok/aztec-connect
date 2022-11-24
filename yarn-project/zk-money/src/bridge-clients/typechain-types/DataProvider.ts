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
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common.js';

export declare namespace DataProvider {
  export type AssetDataStruct = {
    assetAddress: PromiseOrValue<string>;
    assetId: PromiseOrValue<BigNumberish>;
    label: PromiseOrValue<string>;
  };

  export type AssetDataStructOutput = [string, BigNumber, string] & {
    assetAddress: string;
    assetId: BigNumber;
    label: string;
  };

  export type BridgeDataStruct = {
    bridgeAddress: PromiseOrValue<string>;
    bridgeAddressId: PromiseOrValue<BigNumberish>;
    label: PromiseOrValue<string>;
  };

  export type BridgeDataStructOutput = [string, BigNumber, string] & {
    bridgeAddress: string;
    bridgeAddressId: BigNumber;
    label: string;
  };
}

export interface DataProviderInterface extends utils.Interface {
  functions: {
    'ROLLUP_PROCESSOR()': FunctionFragment;
    'SUBSIDY()': FunctionFragment;
    'addAsset(uint256,string)': FunctionFragment;
    'addAssetsAndBridges(uint256[],string[],uint256[],string[])': FunctionFragment;
    'addBridge(uint256,string)': FunctionFragment;
    'getAccumulatedSubsidyAmount(uint256)': FunctionFragment;
    'getAsset(string)': FunctionFragment;
    'getAsset(uint256)': FunctionFragment;
    'getAssets()': FunctionFragment;
    'getBridge(uint256)': FunctionFragment;
    'getBridge(string)': FunctionFragment;
    'getBridges()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'ROLLUP_PROCESSOR'
      | 'SUBSIDY'
      | 'addAsset'
      | 'addAssetsAndBridges'
      | 'addBridge'
      | 'getAccumulatedSubsidyAmount'
      | 'getAsset(string)'
      | 'getAsset(uint256)'
      | 'getAssets'
      | 'getBridge(uint256)'
      | 'getBridge(string)'
      | 'getBridges'
      | 'owner'
      | 'renounceOwnership'
      | 'transferOwnership',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'ROLLUP_PROCESSOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SUBSIDY', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'addAsset',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'addAssetsAndBridges',
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'addBridge',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'getAccumulatedSubsidyAmount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getAsset(string)', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAsset(uint256)', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getAssets', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getBridge(uint256)', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getBridge(string)', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getBridges', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'ROLLUP_PROCESSOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SUBSIDY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addAsset', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addAssetsAndBridges', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addBridge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccumulatedSubsidyAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAsset(string)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAsset(uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAssets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBridge(uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBridge(string)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBridges', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface DataProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DataProviderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<[string]>;

    SUBSIDY(overrides?: CallOverrides): Promise<[string]>;

    addAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    addAssetsAndBridges(
      _assetIds: PromiseOrValue<BigNumberish>[],
      _assetTags: PromiseOrValue<string>[],
      _bridgeAddressIds: PromiseOrValue<BigNumberish>[],
      _bridgeTags: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    addBridge(
      _bridgeAddressId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getAccumulatedSubsidyAmount(
      _bridgeCallData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    'getAsset(string)'(
      _tag: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[DataProvider.AssetDataStructOutput]>;

    'getAsset(uint256)'(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[DataProvider.AssetDataStructOutput]>;

    getAssets(overrides?: CallOverrides): Promise<[DataProvider.AssetDataStructOutput[]]>;

    'getBridge(uint256)'(
      _bridgeAddressId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[DataProvider.BridgeDataStructOutput]>;

    'getBridge(string)'(
      _tag: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[DataProvider.BridgeDataStructOutput]>;

    getBridges(overrides?: CallOverrides): Promise<[DataProvider.BridgeDataStructOutput[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<string>;

  SUBSIDY(overrides?: CallOverrides): Promise<string>;

  addAsset(
    _assetId: PromiseOrValue<BigNumberish>,
    _tag: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  addAssetsAndBridges(
    _assetIds: PromiseOrValue<BigNumberish>[],
    _assetTags: PromiseOrValue<string>[],
    _bridgeAddressIds: PromiseOrValue<BigNumberish>[],
    _bridgeTags: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  addBridge(
    _bridgeAddressId: PromiseOrValue<BigNumberish>,
    _tag: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getAccumulatedSubsidyAmount(
    _bridgeCallData: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  'getAsset(string)'(
    _tag: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<DataProvider.AssetDataStructOutput>;

  'getAsset(uint256)'(
    _assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<DataProvider.AssetDataStructOutput>;

  getAssets(overrides?: CallOverrides): Promise<DataProvider.AssetDataStructOutput[]>;

  'getBridge(uint256)'(
    _bridgeAddressId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<DataProvider.BridgeDataStructOutput>;

  'getBridge(string)'(
    _tag: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<DataProvider.BridgeDataStructOutput>;

  getBridges(overrides?: CallOverrides): Promise<DataProvider.BridgeDataStructOutput[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<string>;

    SUBSIDY(overrides?: CallOverrides): Promise<string>;

    addAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    addAssetsAndBridges(
      _assetIds: PromiseOrValue<BigNumberish>[],
      _assetTags: PromiseOrValue<string>[],
      _bridgeAddressIds: PromiseOrValue<BigNumberish>[],
      _bridgeTags: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    addBridge(
      _bridgeAddressId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    getAccumulatedSubsidyAmount(
      _bridgeCallData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    'getAsset(string)'(
      _tag: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<DataProvider.AssetDataStructOutput>;

    'getAsset(uint256)'(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<DataProvider.AssetDataStructOutput>;

    getAssets(overrides?: CallOverrides): Promise<DataProvider.AssetDataStructOutput[]>;

    'getBridge(uint256)'(
      _bridgeAddressId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<DataProvider.BridgeDataStructOutput>;

    'getBridge(string)'(
      _tag: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<DataProvider.BridgeDataStructOutput>;

    getBridges(overrides?: CallOverrides): Promise<DataProvider.BridgeDataStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<BigNumber>;

    SUBSIDY(overrides?: CallOverrides): Promise<BigNumber>;

    addAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    addAssetsAndBridges(
      _assetIds: PromiseOrValue<BigNumberish>[],
      _assetTags: PromiseOrValue<string>[],
      _bridgeAddressIds: PromiseOrValue<BigNumberish>[],
      _bridgeTags: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    addBridge(
      _bridgeAddressId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getAccumulatedSubsidyAmount(
      _bridgeCallData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getAsset(string)'(_tag: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    'getAsset(uint256)'(_assetId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getAssets(overrides?: CallOverrides): Promise<BigNumber>;

    'getBridge(uint256)'(_bridgeAddressId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    'getBridge(string)'(_tag: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getBridges(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ROLLUP_PROCESSOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SUBSIDY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    addAssetsAndBridges(
      _assetIds: PromiseOrValue<BigNumberish>[],
      _assetTags: PromiseOrValue<string>[],
      _bridgeAddressIds: PromiseOrValue<BigNumberish>[],
      _bridgeTags: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    addBridge(
      _bridgeAddressId: PromiseOrValue<BigNumberish>,
      _tag: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getAccumulatedSubsidyAmount(
      _bridgeCallData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getAsset(string)'(_tag: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getAsset(uint256)'(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getBridge(uint256)'(
      _bridgeAddressId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getBridge(string)'(_tag: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBridges(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
