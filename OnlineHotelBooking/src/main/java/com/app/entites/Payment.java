package com.app.entites;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Data
@Entity
@Table(name="payment")
public class Payment
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int paymentid;
	@Column
	String paymentmode;
	@Column
	String bookingid;
	@Column
	int uid;
	@Column
	String cardno;
	@Column
	String cvv;
	@Column
	String expiry;
}
