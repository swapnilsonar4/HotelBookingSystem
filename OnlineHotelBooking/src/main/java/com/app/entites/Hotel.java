package com.app.entites;

import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;


@Data
@Entity
@Table(name="hotel")
public class Hotel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int hotelid;

	@Column
	int hotelregno;
	
	@Column
	String hname;
	
	@Column
	String address;
	
	@Column
	String email;
	
	@Column
	double contact_no;
	
	/*@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image1;
	
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image2;*/
	
	@Column
	int ac_room;
	
	@Column
	int non_ac_room;
	
	@Column
	int uid;
	
	@Column
	String cityname;
	
	/*@JsonIgnoreProperties("hotel")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="cityid")
	City cityid;*/
	

	/*@JsonIgnoreProperties("hotel")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="uid")
	User uid;*/

}
