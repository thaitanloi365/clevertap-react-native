import { Subscription } from "@react-native-community/netinfo";

/*******************
 * Personalization
 ******************/
export type EventNames =
  | "CleverTapProfileDidInitialize"
  | "CleverTapProfileSync"
  | "CleverTapInAppNotificationDismissed"
  | "CleverTapInboxDidInitialize"
  | "CleverTapInboxMessagesDidUpdate"
  | "CleverTapDidTokenRefresh";
/**
 * Personalization
 * Enables the Personalization API
 */
export function enablePersonalization(): void;

/**
 * Enables tracking opt out for the currently active user.
 * @param optOut {boolean}
 */
export function setOptOut(optOut: boolean): void;

/**
 * Enables the reporting of device network related information, including IP address.  This reporting is disabled by default.
 * @param enable {boolean}
 */
export function enableDeviceNetworkInfoReporting(enable: boolean): void;

/*******************
 * Push
 ******************/

/**
 * Registers for push notifications
 */
export function registerForPush(): void;

/**
 * Sets the device's push token
 * @param token {string}
 */
export function setPushToken(token: string): void;

/**
 * Gets the device's push token
 * @return {string}
 */
export function getPushToken(token: string): string;

/**
 * Create Notification Channel for Android O+
 * @param channelID {string}
 * @param channelName {string}
 * @param channelDescription {string}
 * @param importance {number}
 * @param showBadge {boolean}
 */
export function createNotificationChannel(
  channelID: string,
  channelName: string,
  channelDescription: string,
  importance: number,
  showBadge: boolean
): void;

/**
 * Create Notification Channel for Android O+
 * @param channelID {string}
 * @param channelName {string}
 * @param channelDescription {string}
 * @param importance {number}
 * @param showBadge {boolean}
 * @param sound {string}
 */
export function createNotificationChannelWithSound(
  channelID: string,
  channelName: string,
  channelDescription: string,
  importance: number,
  showBadge: boolean,
  sound: string
): void;

/**
 * Create Notification Channel with Group ID for Android O+
 * @param channelID {string}
 * @param channelName {string}
 * @param channelDescription {string}
 * @param importance {number}
 * @param groupId {string}
 * @param showBadge {boolean}
 * @param sound {string}
 */
export function createNotificationChannelWithGroupId(
  channelID: string,
  channelName: string,
  channelDescription: string,
  importance: number,
  groupId: string,
  showBadge: boolean
): void;

/**
 * Create Notification Channel with Group ID for Android O+
 * @param channelID {string}
 * @param channelName {string}
 * @param channelDescription {string}
 * @param importance {number}
 * @param groupId {string}
 * @param showBadge {boolean}
 */
export function createNotificationChannelWithGroupIdAndSound(
  channelID: string,
  channelName: string,
  channelDescription: string,
  importance: number,
  groupId: string,
  showBadge: boolean,
  sound: string
): void;

/**
 * Create Notification Channel Group for Android O+
 * @param groupID {string}
 * @param groupName {string}
 */
export function createNotificationChannelGroup(groupID: string, groupName: string): void;

/**
 * Delete Notification Channel for Android O+
 * @param channelID {string}
 */
export function deleteNotificationChannel(channelID: string): void;

/**
 * Delete Notification Group for Android O+
 * @param groupID {string}
 */
export function deleteNotificationChannelGroup(groupID: string): void;

/*******************
 * Events
 ******************/

/**
 * Record Screen View
 * @param screenName {string}
 */
export function recordScreenView(screenName: string): void;
/**
 *  Record Event with Name and Event properties
 * @param eventName {string}
 * @param eventProps {any}
 */
export function recordEvent(eventName: string, eventProps: any): void;

/**
 *  Record Charged Event with Details and Items
 * @param details {any}  object with transaction details
 * @param items {any}  array of items purchased
 */
export function recordChargedEvent(details: any, items: any): void;

/**
 * Get Event First Time
 * @param eventName {string}
 * callback returns epoch seconds or -1
 */
export function eventGetFirstTime(eventName: string, callback: Callback): void;

/**
 * Get Event Last Time
 * @param eventName {string}
 * callback returns epoch seconds or -1
 */
export function eventGetLastTime(eventName: string, callback: Callback): void;

/**
 * Get Event Number of Occurrences
 * @param eventName {string}
 * calls back with int or -1
 */
export function eventGetOccurrences(eventName: string, callback: Callback): void;

/**
 * Get Event Details
 * @param eventName {string}
 * calls back with object {"eventName": <string>, "firstTime":<epoch seconds>, "lastTime": <epoch seconds>, "count": <int>} or empty object
 */
export function eventGetDetail(eventName: string, callback: Callback): void;

/**
 * Get Event History
 * calls back with object {"eventName1":<event1 details object>, "eventName2":<event2 details object>}
 */
export function getEventHistory(callback: Callback): void;

/**
 * Set location
 * @param lat {number}
 * @param lon {number}
 */
export function setLocation(lat: number, lon: number): void;

/**
 * Creates a separate and distinct user profile identified by one or more of Identity, Email, FBID or GPID values,
 * and populated with the key-values included in the profile dictionary.
 * If your app is used by multiple users, you can use this method to assign them each a unique profile to track them separately.
 * If instead you wish to assign multiple Identity, Email, FBID and/or GPID values to the same user profile,
 * use profileSet rather than this method.
 * If none of Identity, Email, FBID or GPID is included in the profile dictionary,
 * all properties values will be associated with the current user profile.
 * When initially installed on this device, your app is assigned an "anonymous" profile.
 * The first time you identify a user on this device (whether via onUserLogin or profileSet),
 * the "anonymous" history on the device will be associated with the newly identified user.
 * Then, use this method to switch between subsequent separate identified users.
 * Please note that switching from one identified user to another is a costly operation
 * in that the current session for the previous user is automatically closed
 * and data relating to the old user removed, and a new session is started
 * for the new user and data for that user refreshed via a network call to CleverTap.
 * In addition, any global frequency caps are reset as part of the switch.
 * @param profile {any} object
 */
export function onUserLogin(profile: any): void;

/**
 * Set profile attributes
 * @param profile {any} object
 */
export function profileSet(profile: any): void;

/**
 * Set profile attributes from facebook user
 * @param profile {any} facebook graph user object
 */
export function profileSetGraphUser(profile: any): void;

/**
 * Set profile attributes rom google plus user
 * @param profile {any} google plus user object
 */
export function profileGooglePlusUser(profile: any): void;

/**
 * Get User Profile Property
 * @param propertyName {string}
 * calls back with value of propertyName or false
 */
export function profileGetProperty(propertyName: string, callback: Callback): void;

/**
 * Get a unique CleverTap identifier suitable for use with install attribution providers.
 * calls back with unique CleverTap attribution identifier
 */
export function profileGetCleverTapAttributionIdentifier(callback: Callback): void;

/**
 * Get User Profile CleverTapID
 * calls back with CleverTapID or false
 */
export function profileGetCleverTapID(callback: Callback): void;

/**
 * Remove the property specified by key from the user profile
 * @param key {string}
 */
export function profileRemoveValueForKey(key: string): void;

/**
 * Method for setting a multi-value user profile property
 * @param key {string}
 * @param values {any} array of strings
 */
export function profileSetMultiValuesForKey(values: any, key: string): void;

/**
 * Method for adding a value to a multi-value user profile property
 * @param key {string}
 * @param value {string}
 */
export function profileAddMultiValueForKey(value: string, key: string): void;

/**
 * Method for adding values to a multi-value user profile property
 * @param key {string}
 * @param values {any} array of strings
 */
export function profileAddMultiValuesForKey(values: any, key: string): void;
/**
 * Method for removing a value from a multi-value user profile property
 * @param key {string}
 * @param value {string}
 */
export function profileRemoveMultiValueForKey(value: string, key: string): void;

/**
 * Method for removing a value from a multi-value user profile property
 * @param key {string}
 * @param values {any} array of strings
 */
export function profileRemoveMultiValuesForKey(values: any, key: string): void;

/*******************
 * Session
 ******************/

/**
 * Get Session Elapsed Time
 * calls back with seconds
 */
export function sessionGetTimeElapsed(callback: Callback): void;

/**
 * Get Session Total Visits
 * calls back with with int or -1
 */
export function sessionGetTotalVisits(callback: Callback): void;

/**
 * Get Session Screen Count
 * calls back with with int
 */
export function sessionGetScreenCount(callback: Callback): void;

/**
 * Get Session Previous Visit Time
 * calls back with with epoch seconds or -1
 */
export function sessionGetPreviousVisitTime(callback: Callback): void;

/**
 * Get Sesssion Referrer UTM details
 * object {"source": <string>, "medium": <string>, "campaign": <string>} or empty object
 */
export function sessionGetUTMDetails(callback: Callback): void;

/**
 * Call this to manually track the utm details for an incoming install referrer
 * @param source {string}
 * @param medium {string}
 * @param campaign {string}
 */
export function pushInstallReferrer(source: string, medium: string, campaign: string): void;

/****************************
 * Notification Inbox methods
 ****************************/
/**
 * Call this method to initialize the App Inbox
 */
export function initializeInbox(): void;

/**
 * Call this method to get the count of unread Inbox messages
 */
export function getInboxMessageUnreadCount(callback: Callback): void;

/**
 * Call this method to get the count of total Inbox messages
 */
export function getInboxMessageCount(callback: Callback): void;

/**
 * Call this method to open the App Inbox
 * @param styleConfig : any or empty object
 */
export function showInbox(styleConfig: any): void;

/*******************
 * Developer Options
 ******************/
/**
 * 0 is off, 1 is info, 2 is debug, default is 1
 * @param level {number}
 */
export function setDebugLevel(level: number): void;

export function addListener(eventName: EventNames, handler: void): void;

type Callback = (err: object, res: object) => void;
