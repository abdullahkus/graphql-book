import React, { useState, useEffect } from 'react';
// Antd
import { Table, Button, Col, Row } from 'antd';
import { AppstoreAddOutlined, DeleteOutlined } from '@ant-design/icons';
// Router
import { Link } from 'react-router-dom';
// Apollo
import { useMutation, useQuery } from '@apollo/client';
import { ALL_BOOKS, REMOVE_BOOK } from '../../queries/bookQueries';
import { ALL_GENRES } from '../../queries/genreQueries';
import { ALL_AUTHORS } from '../../queries/authorQueries';

const BookList = () => {
  const [tableData, setTableData] = useState([]);
  const [genresName, setGenresName] = useState([]);
  const [authorsName, setAuthorsName] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      filters: genresName,
      onFilter: (value, record) => record.genre.indexOf(value) === 0,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      filters: authorsName,
      onFilter: (value, record) => record.author.indexOf(value) === 0,
    },
    {
      title: 'Publisher Date',
      dataIndex: 'publisherDate',
      key: 'publisherDate',
      sorter: (a, b) => new Date(a.publisherDate) - new Date(b.publisherDate),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, record) => (
        <Button
          type='primary'
          icon={<DeleteOutlined />}
          onClick={() => removeBookHandler(record.id)}>
          Remove Book
        </Button>
      ),
    },
  ];

  const {
    loading: allBooksLoading,
    error: allBooksError,
    data: allBooksData,
  } = useQuery(ALL_BOOKS);

  const {
    loading: allGenresLoading,
    error: allGenresError,
    data: allGenresData,
  } = useQuery(ALL_GENRES);

  const {
    loading: allAuthorsLoading,
    error: allAuthorsError,
    data: allAuthorsData,
  } = useQuery(ALL_AUTHORS);

  const [
    removeBook,
    {
      loading: removeBookLoading,
      error: removeBookError,
      data: removeBookData,
    },
  ] = useMutation(REMOVE_BOOK);

  const removeBookHandler = async (bookId) => {
    return await removeBook({
      variables: {
        id: bookId,
      },
      refetchQueries: [
        {
          query: ALL_BOOKS,
        },
      ],
    })
      .then(() => {
        console.log(removeBookData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findGenre = (genreId) => {
    if (!allGenresLoading && allGenresData) {
      const findedGenre = allGenresData.allGenres.find(
        (genre) => genre.id === genreId,
      );
      return findedGenre;
    }
  };

  useEffect(() => {
    if (!allGenresLoading && allGenresData) {
      allGenresData.allGenres.forEach((genre) => {
        setGenresName((currentValue) => [
          ...currentValue,
          { text: genre.name, value: genre.name },
        ]);
      });
    }
  }, [allGenresData]);

  useEffect(() => {
    if (!allAuthorsLoading && allAuthorsData) {
      allAuthorsData.allAuthors.forEach((author) => {
        setAuthorsName((currentValue) => [
          ...currentValue,
          {
            text: `${author.first_name} ${author.last_name}`,
            value: `${author.first_name} ${author.last_name}`,
          },
        ]);
      });
    }
  }, [allAuthorsData]);

  useEffect(() => {
    if (
      !allBooksLoading &&
      allBooksData &&
      !allGenresLoading &&
      allGenresData
    ) {
      const newData = allBooksData.allBooks.reduce((accumulator, book) => {
        const bookGenre = findGenre(book.genre_id);
        const editedData = {
          key: book.id,
          id: book.id,
          title: book.title,
          genre: bookGenre.name,
          author: `${book.Author.first_name} ${book.Author.last_name}`,
          publisherDate: book.publisher_date,
        };
        return accumulator.concat(editedData);
      }, []);
      setTableData(newData);
    }
  }, [allBooksData, allGenresData]);

  if (allBooksError) return <p>Error : {allBooksError.message}</p>;
  return (
    <>
      <Row
        justify='end'
        style={{ marginBottom: '10px' }}>
        <Col>
          <Link to='/book-add'>
            <Button
              type='primary'
              icon={<AppstoreAddOutlined />}>
              Add Book
            </Button>
          </Link>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={tableData}
        loading={allBooksLoading}
        scroll={{ x: true }}
      />
    </>
  );
};

export default BookList;
