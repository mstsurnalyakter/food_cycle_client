import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const QuizPage = () => {
  const { commonId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [result, setResult] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state
  const axiosCommon = useAxiosCommon();

  // Fetch quiz data
  useEffect(() => {
    const fetchQuiz = async () => {
      const { data } = await axiosCommon(`/quiz/${commonId}`);
      setQuestions(data[0]?.exam_details || []);
    };
    fetchQuiz();
  }, [commonId]);

  // Handle answer change
  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionId] = answer;
      return newAnswers;
    });
  };

  // Check if all questions are answered
  const allAnswered = questions.every(
    (_, index) => answers[index] !== undefined
  );

  // Submit quiz answers
  const handleSubmit = async () => {
    if (!allAnswered) {
      alert("Answer all the questions before submitting!");
      return;
    }

    const { data } = await axiosCommon.post(`/quiz/submit/${commonId}`, {
      answers,
    });
    setScore(data.score);
    setResult(data.result);
    setIsSubmitted(true); // Mark quiz as submitted
    setShowModal(true);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Student Quiz</h1>

      {questions.map((question, index) => {
        // Check if the answer is correct for the current question
        const isCorrect = answers[index] === question.correct_answer;

        return (
          <div
            key={question.exam_detail_id}
            className={`p-4 border rounded-lg mb-6 ${
              isSubmitted
                ? isCorrect
                  ? "border-green-500"
                  : "border-red-500"
                : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">
              {question.exam_detail_title}
            </h2>
            {question.exam_detail_items.map((item, i) => (
              <label key={i} className="block mb-2">
                <input
                  type="radio"
                  name={`question${index}`}
                  value={item}
                  checked={answers[index] === item}
                  onChange={() => handleAnswerChange(index, item)}
                  className="mr-2"
                />
                {item}
              </label>
            ))}
            {isSubmitted && (
              <div className="flex items-center justify-end mt-2">
                {isCorrect ? (
                  <span className="text-green-600">✔️</span>
                ) : (
                  <span className="text-red-600">❌</span>
                )}
              </div>
            )}
          </div>
        );
      })}

      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              Congratulations! Your Score: {score}/{questions.length}
            </h2>
            <ul>
              {result.map((question, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-2 ${
                    question.isCorrect ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <span>{question.exam_detail_title}</span>
                  <span className="flex items-center">
                    {question.isCorrect ? (
                      <span className="text-green-600">✔️</span>
                    ) : (
                      <span className="text-red-600">❌</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
