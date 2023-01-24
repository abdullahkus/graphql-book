import React, { useEffect, useState } from 'react';
// Antd
import { Col, Row, Typography, Button, Form, Input, Select } from 'antd';
// Apollo
import { useQuery, useMutation } from '@apollo/client';
import { ALL_AUTHORS } from '../../queries/authorQueries';
import { ALL_GENRES } from '../../queries/genreQueries';
import { CREATE_BOOK, ALL_BOOKS } from '../../queries/bookQueries';
// Router
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const BookAdd = () => {
  const [authorsOptions, setAuthorsOptions] = useState([]);
  const [genresOptions, setGenresOptions] = useState([]);

  const navigate = useNavigate();

  const {
    loading: allAuthorsLoading,
    error: allAuthorsError,
    data: allAuthorsData,
  } = useQuery(ALL_AUTHORS);

  const {
    loading: allGenresLoading,
    error: allGenresError,
    data: allGenresData,
  } = useQuery(ALL_GENRES);

  const [
    createBook,
    {
      data: createBookData,
      loading: createBookLoading,
      error: createBookError,
    },
  ] = useMutation(CREATE_BOOK);

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() 0 ile 11 arasında bir değer döndürür, dolayısıyla 1 eklemek gerekir
    let day = date.getDate();
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  };

  useEffect(() => {
    if (!allAuthorsError && allAuthorsData) {
      const options = allAuthorsData.allAuthors.reduce(
        (accumulator, author) => {
          const newValue = {
            value: author.id,
            label: `${author.first_name} ${author.last_name}`,
          };
          return accumulator.concat(newValue);
        },
        [],
      );
      setAuthorsOptions(options);
    }
  }, [allAuthorsData]);

  useEffect(() => {
    if (!allGenresLoading && allGenresData) {
      const options = allGenresData.allGenres.reduce((accumulator, genre) => {
        const newValue = {
          value: genre.id,
          label: genre.name,
        };
        return accumulator.concat(newValue);
      }, []);
      setGenresOptions(options);
    }
  }, [allGenresData]);

  const onFinish = async (values) => {
    const newBook = {
      title: values.title,
      author_id: values.author_id,
      genre_id: values.genre_id,
      publisher_date: getDate(),
    };

    await createBook({
      variables: newBook,
      refetchQueries: [
        {
          query: ALL_BOOKS,
        },
      ],
    })
      .then(() => {
        navigate('/book-list');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Title level={2}>Add Book</Title>
      <Form
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span='12'>
            <Form.Item
              label='Title'
              name='title'
              rules={[
                {
                  required: true,
                  message: 'Please input your title!',
                },
              ]}>
              <Input placeholder='Title' />
            </Form.Item>
            <Form.Item
              name='author_id'
              label='Author'
              rules={[
                {
                  required: true,
                  message: 'Please select your author!',
                },
              ]}>
              <Select
                loading={allAuthorsLoading}
                placeholder='Select a author'
                options={authorsOptions}
              />
            </Form.Item>
          </Col>
          <Col span='12'>
            <Form.Item
              name='genre_id'
              label='Genre'
              rules={[
                {
                  required: true,
                  message: 'Please select your genre!',
                },
              ]}>
              <Select
                loading={allGenresLoading}
                placeholder='Select a genre'
                options={genresOptions}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button
          type='primary'
          htmlType='submit'>
          Add
        </Button>
      </Form>
    </>
  );
};

export default BookAdd;
