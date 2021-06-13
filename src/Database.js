// Database.js
import * as SQLite from 'expo-sqlite';

db = SQLite.openDatabase('quester.db');

export default db;