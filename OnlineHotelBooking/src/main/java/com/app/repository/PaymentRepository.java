package com.app.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entites.Payment;

@Transactional
@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
