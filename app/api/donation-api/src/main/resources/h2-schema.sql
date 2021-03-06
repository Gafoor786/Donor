



INSERT INTO `config` ( `created_at`, `created_by`, `updated_at`, `updated_by`, `description`, `module`, `name`, `status`, `value`)
VALUES
	('2018-04-28 10:20:25',1,NULL,NULL,NULL,'sms_donation_text','Thanks for donating ${amount}.\n','A',NULL),
	('2018-05-13 10:01:43',1,NULL,NULL,'','notification','sms_enabled','A','1');

INSERT INTO `config` ( `created_at`, `created_by`, `updated_at`, `updated_by`, `description`, `module`, `name`, `status`, `value`)
VALUES
	( '2018-05-13 15:22:12', 1, '2018-05-13 15:22:26', 1, NULL, 'campaign_type', 'Monthly', 'A', NULL),
	( '2018-05-13 15:22:12', 1, '2018-05-13 15:22:26', 1, NULL, 'campaign_type', 'Yearly', 'A', NULL),
	( '2018-05-13 15:22:12', 1, '2018-05-13 15:22:26', 1, NULL, 'campaign_type', 'Once', 'A', NULL);

INSERT INTO `config` (`created_at`, `created_by`, `updated_at`, `updated_by`, `description`, `module`, `name`, `status`, `value`)
VALUES
	( '2018-05-14 20:13:55', 1, NULL, NULL, NULL, 'expense_type', 'Salary', 'A', NULL);

INSERT INTO `config` ( `created_at`, `created_by`, `updated_at`, `updated_by`, `description`, `module`, `name`, `status`, `value`)
VALUES
	('2018-05-14 20:13:47', 1, NULL, NULL, NULL, 'income_type', 'Adhoc', 'A', NULL);




CREATE TABLE IF NOT EXISTS `dim_month_year` (
  `month` varchar(2) DEFAULT NULL,
  `year` varchar(4) DEFAULT NULL
);

INSERT INTO `dim_month_year` (`month`, `year`)
VALUES
	('01','2018'),
	('02','2018'),
	('03','2018'),
	('04','2018'),
	('05','2018'),
	('06','2018'),
	('07','2018'),
	('08','2018'),
	('09','2018'),
	('10','2018'),
	('11','2018'),
	('12','2018'),
	('01','2019'),
	('02','2019'),
	('03','2019'),
	('04','2019'),
	('05','2019'),
	('06','2019'),
	('07','2019'),
	('08','2019'),
	('09','2019'),
	('10','2019'),
	('11','2019'),
	('12','2019'),
	('01','2020'),
	('02','2020'),
	('03','2020'),
	('04','2020'),
	('05','2020'),
	('06','2020'),
	('07','2020'),
	('08','2020'),
	('09','2020'),
	('10','2020'),
	('11','2020'),
	('12','2020'),
	('01','2021'),
	('02','2021'),
	('03','2021'),
	('04','2021'),
	('05','2021'),
	('06','2021'),
	('07','2021'),
	('08','2021'),
	('09','2021'),
	('10','2021'),
	('11','2021'),
	('12','2021'),
	('01','2022'),
	('02','2022'),
	('03','2022'),
	('04','2022'),
	('05','2022'),
	('06','2022'),
	('07','2022'),
	('08','2022'),
	('09','2022'),
	('10','2022'),
	('11','2022'),
	('12','2022'),
	('01','2023'),
	('02','2023'),
	('03','2023'),
	('04','2023'),
	('05','2023'),
	('06','2023'),
	('07','2023'),
	('08','2023'),
	('09','2023'),
	('10','2023'),
	('11','2023'),
	('12','2023'),
	('01','2024'),
	('02','2024'),
	('03','2024'),
	('04','2024'),
	('05','2024'),
	('06','2024'),
	('07','2024'),
	('08','2024'),
	('09','2024'),
	('10','2024'),
	('11','2024'),
	('12','2024'),
	('01','2025'),
	('02','2025'),
	('03','2025'),
	('04','2025'),
	('05','2025'),
	('06','2025'),
	('07','2025'),
	('08','2025'),
	('09','2025'),
	('10','2025'),
	('11','2025'),
	('12','2025'),
	('01','2026'),
	('02','2026'),
	('03','2026'),
	('04','2026'),
	('05','2026'),
	('06','2026'),
	('07','2026'),
	('08','2026'),
	('09','2026'),
	('10','2026'),
	('11','2026'),
	('12','2026'),
	('01','2027'),
	('02','2027'),
	('03','2027'),
	('04','2027'),
	('05','2027'),
	('06','2027'),
	('07','2027'),
	('08','2027'),
	('09','2027'),
	('10','2027'),
	('11','2027'),
	('12','2027'),
	('01','2028'),
	('02','2028'),
	('03','2028'),
	('04','2028'),
	('05','2028'),
	('06','2028'),
	('07','2028'),
	('08','2028'),
	('09','2028'),
	('10','2028'),
	('11','2028'),
	('12','2028'),
	('01','2029'),
	('02','2029'),
	('03','2029'),
	('04','2029'),
	('05','2029'),
	('06','2029'),
	('07','2029'),
	('08','2029'),
	('09','2029'),
	('10','2029'),
	('11','2029'),
	('12','2029');


INSERT INTO `user_login` (`id`, `created_at`, `created_by`, `updated_at`, `updated_by`, `password`, `username`)
VALUES
	(1,'2018-03-28 23:21:24',1,NULL,NULL,'test','admin');


INSERT INTO `user_details` (`id`, `created_at`, `created_by`, `updated_at`, `updated_by`, `area`, `city`, `country`, `doorno`, `email`, `firstname`, `lastname`, `phone`, `state`, `street`, `user_login_id`)
VALUES
	(1,'2018-03-28 23:21:24',1,NULL,NULL,'system','system','system','4','balasubhramanian@gmail.com','Admin','','','system','system',1);
