USE sampledb;
CREATE TABLE IF NOT EXISTS `device` (
  `id` VARCHAR(32) NOT NULL COMMENT '裝置加密編號',

  `os` VARCHAR(20) NOT NULL COMMENT '裝置系統類型 ',
  `mobileModel`  VARCHAR(256) NULL DEFAULT NULL COMMENT '手機型號',
  `osVersion` VARCHAR(512) NULL DEFAULT NULL COMMENT '手機作業系統版本',
  `appId` VARCHAR(256) NOT NULL COMMENT '應用程式名稱',
  `appVersion` VARCHAR(20) NOT NULL COMMENT '應用程式版本',
  `langUsed` VARCHAR(10) NULL COMMENT 'APP 使用的語系',
  `langOriginal` VARCHAR(100) NULL COMMENT '裝置使用的語系',
  `countryCode` VARCHAR(10) NULL COMMENT '裝置的國家別',

  `timezone` VARCHAR(10) NULL COMMENT '最後裝置所在時區 UTC timezone',
  `pushToken` VARCHAR(256) NULL COMMENT '推播 TOKEN (firebase)',
  
  `createDate` DATETIME NOT NULL DEFAULT NOW() COMMENT '建立時間',
  `lastUpdate` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW() COMMENT '修改時間',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
