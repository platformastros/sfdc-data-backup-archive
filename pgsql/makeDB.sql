CREATE SCHEMA sfdc_archive
    AUTHORIZATION <user_name>;

CREATE TABLE sfdc_archive.archived_cases
	(
	    id integer NOT NULL DEFAULT nextval('sfdc_archive.archived_cases_id_seq'::regclass),
	    sfid character varying(24) COLLATE pg_catalog."default",
	    description text COLLATE pg_catalog."default",
	    contactemail character varying(80) COLLATE pg_catalog."default",
	    contactid character varying(18) COLLATE pg_catalog."default",
	    closeddate timestamp without time zone,
	    type character varying(255) COLLATE pg_catalog."default",
	    createdbyid character varying(18) COLLATE pg_catalog."default",
	    casenumber character varying(30) COLLATE pg_catalog."default",
	    isclosed boolean,
	    sourceid character varying(18) COLLATE pg_catalog."default",
	    createddate timestamp without time zone,
	    comments character varying(4000) COLLATE pg_catalog."default",
	    product__c character varying(255) COLLATE pg_catalog."default",
	    status character varying(255) COLLATE pg_catalog."default",
	    lastmodifiedbyid character varying(18) COLLATE pg_catalog."default",
	    systemmodstamp timestamp without time zone,
	    ownerid character varying(18) COLLATE pg_catalog."default",
	    masterrecordid character varying(18) COLLATE pg_catalog."default",
	    contactphone character varying(40) COLLATE pg_catalog."default",
	    lastmodifieddate timestamp without time zone,
	    subject character varying(255) COLLATE pg_catalog."default",
	    assetid character varying(18) COLLATE pg_catalog."default",
	    isescalated boolean,
	    accountid character varying(18) COLLATE pg_catalog."default",
	    origin character varying(255) COLLATE pg_catalog."default",
	    slaviolation__c character varying(255) COLLATE pg_catalog."default",
	    parentid character varying(18) COLLATE pg_catalog."default",
	    reason character varying(255) COLLATE pg_catalog."default",
	    priority character varying(255) COLLATE pg_catalog."default",
	    contactmobile character varying(40) COLLATE pg_catalog."default",
	    CONSTRAINT archived_cases_pkey PRIMARY KEY (id)
	)

TABLESPACE pg_default;
