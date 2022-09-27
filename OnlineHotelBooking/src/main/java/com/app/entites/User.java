package com.app.entites;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;


@Data
@Entity
@Table(name="user")
public class User 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uid;
	@NotBlank
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String password;
	@Column
	String contact_no;
	@Column
	String aadhar_no;
	@Column
	String address;
	@Column
	String usertype;
	
	
	/*@JsonIgnoreProperties("user")
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	Set<Hotel> hotel;*/
}
